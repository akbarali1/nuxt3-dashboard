import {useMainStore} from "~/store";
import {useRuntimeConfig} from "#imports";



export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie('token');
    const useStore = useMainStore();
    const api_url = useRuntimeConfig().public.api_url;

    console.log('cookie', cookie, cookie.value)

    if(!cookie.value) {
        navigateTo('/users')
        console.log(1)
      }else {
      console.log(2)
    }

    if(to.fullPath === from.fullPath) {
        getUsersData(cookie,useStore,api_url)
    }


});

async function getUsersData(cookie,store,api_url) {
    const response = await $fetch(api_url+'/user', {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer "+cookie.value
        },
    });

    store.usersData = response
}

