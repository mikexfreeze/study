import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <keep-alive>
            <router-view></router-view>
      </keep-alive>
          <router-view name="b"></router-view>

    </div>
  `
}

const UserHome = {template: '<div>Home</div>'}
const UserProfile = {template: '<div>Profile <input type="text"></div>'}
const UserPosts = {template: '<div>Posts</div>'}

const router = new VueRouter({
    routes: [
        {
            path: '/user/:id', component: User,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched
                {path: '', component: UserHome},

                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                {path: 'profile', components: {
                    default:UserProfile,
                    b:UserProfile
                }},

                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                {path: 'posts', component: UserPosts}
            ]
        }
    ]
})

new Vue({
    router,
    el: '#app'
})

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
