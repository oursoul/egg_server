'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');

class ArticleController extends Controller {
    //exam审核
    async check() {
            const {
                ctx,
                app,
            } = this;
            const passed = await app.mysql.query('select count(*) as passed from joindata where check_tag = 1')
            const unpassed = await app.mysql.query('select count(*) as unpassed from joindata where check_tag = 0')
            const beforeCheck = await app.mysql.query("select count(*) as beforeCheck from joindata where check_tag = ''")
            const res = {
                    // 审核未通过
                    'unpassed': unpassed,
                    //审核通过
                    'passed': passed,
                    //待审核
                    'beforeCheck': beforeCheck
                }
                // 前端拿到数据的格式 
                // console.log(res.unpassed[0].unpassed)
            ctx.body = res
        }
        //风险用户和无风险用户
    async predict() {
            const {
                ctx,
                app,
            } = this;
            const risk_user = await app.mysql.query('select count(*) as risk_user from predata where kind = 0')
            const noRisk_user = await app.mysql.query('select count(*) as noRisk_user from predata where kind = 1')
            const noStandard_user = await app.mysql.query('select count(*) as noStandard_user from joindata where flag = 1 ')

            const res = {
                risk_user,
                noRisk_user,
                noStandard_user
            }
            ctx.body = res
        }
        //关键指标
    async getKey() {
        const {
            ctx,
            app,
        } = this;
        const res = await app.mysql.query('select * from dimkey')
        ctx.body = res
    }
  //重点指标 异常展示
  async abnormal() {
    const {
            ctx,
            app,
        } = this;
        const res = await app.mysql.query('select * from dimkey')
        ctx.body = res
  }

   
}

module.exports = ArticleController;