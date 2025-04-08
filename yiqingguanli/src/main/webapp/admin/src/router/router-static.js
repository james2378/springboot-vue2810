import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import daka from '@/views/modules/daka/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fanxiao from '@/views/modules/fanxiao/list'
    import laoshi from '@/views/modules/laoshi/list'
    import news from '@/views/modules/news/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xueshengliuyan from '@/views/modules/xueshengliuyan/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryFangshi from '@/views/modules/dictionaryFangshi/list'
    import dictionaryFanxiaoYesno from '@/views/modules/dictionaryFanxiaoYesno/list'
    import dictionaryFengxian from '@/views/modules/dictionaryFengxian/list'
    import dictionaryGeli from '@/views/modules/dictionaryGeli/list'
    import dictionaryJiechu from '@/views/modules/dictionaryJiechu/list'
    import dictionaryKesou from '@/views/modules/dictionaryKesou/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWaidi from '@/views/modules/dictionaryWaidi/list'
    import dictionaryZhonggao from '@/views/modules/dictionaryZhonggao/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBanji',
        name: '班级类型名称',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryFangshi',
        name: '返校方式类型名称',
        component: dictionaryFangshi
    }
    ,{
        path: '/dictionaryFanxiaoYesno',
        name: '是否同意',
        component: dictionaryFanxiaoYesno
    }
    ,{
        path: '/dictionaryFengxian',
        name: '风险等级',
        component: dictionaryFengxian
    }
    ,{
        path: '/dictionaryGeli',
        name: '是否已隔离',
        component: dictionaryGeli
    }
    ,{
        path: '/dictionaryJiechu',
        name: '有无接触确诊病例',
        component: dictionaryJiechu
    }
    ,{
        path: '/dictionaryKesou',
        name: '是否咳嗽',
        component: dictionaryKesou
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWaidi',
        name: '近14天是否有外地旅居史',
        component: dictionaryWaidi
    }
    ,{
        path: '/dictionaryZhonggao',
        name: '近14天是否有中高风险地区旅居史',
        component: dictionaryZhonggao
    }


    ,{
        path: '/daka',
        name: '健康打卡',
        component: daka
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fanxiao',
        name: '返校申请',
        component: fanxiao
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
    ,{
        path: '/xueshengliuyan',
        name: '留言',
        component: xueshengliuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
