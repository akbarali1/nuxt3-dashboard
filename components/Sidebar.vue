<template>
    <nav class="header__nav" :class="{ active: !store.activeSidebar }">

        <div class="header__nav-logo">
            <img src="../static/images/logo-icon.png" alt="" />
            <img v-if="store.activeSidebar" src="../static/images/logo-text.png" alt="" />

        </div>
        <div class="header__nav-list">
            <nuxt-link :to="link.to" v-for="link in links" :key="link.id" class="header__nav-blocks"
                active-class="active">
                <div class="header__nav-blocks-item">
                    <i :class=link.icons></i>
                    <p v-if="store.activeSidebar">{{ link.title }}</p>
                </div>
            </nuxt-link>
        </div>
    </nav>
    <nav class="header__nav nav-mob" :class="{ active: !store.activeSidebar }">
        <div class="header__nav-logo">
            <img src="../static/images/logo-icon.png" alt="" />
            <img src="../static/images/logo-text.png" alt="" />

        </div>
        <div class="header__nav-list">
            <nuxt-link :to="link.to" v-for="link in links" :key="link.id" class="header__nav-blocks"
                active-class="active" @click.prevent="closeMenu()">
                <div class="header__nav-blocks-item">
                    <i :class=link.icons></i>
                    <p>{{ link.title }}</p>
                </div>
            </nuxt-link>
        </div>
    </nav>
</template>

<script>

import { useMainStore } from '~~/store';

export default {
    setup() {
        const store = useMainStore()
        return { store }
    },

    data() {
        return {
            links: [
                {
                    title: 'Dashboard',
                    to: '/',
                    icons: 'bi bi-grid-fill'
                },
                {
                    title: 'Undergraduate Programs',
                    to: '/programs',
                    icons: 'bi bi-grid'
                },
                {
                    title: 'Users',
                    to: '/users',
                    icons: 'bi bi-people',
                },
                {
                    title: 'Students Registration',
                    to: '/students',
                    icons: 'bi bi-person-plus-fill',
                },
                {
                    title: 'Notice Board',
                    to: '/notice',
                    icons: 'bi bi-chat-dots',
                },
                {
                    title: 'Data Export',
                    to: '/data',
                    icons: 'bi bi-download'
                },
                {
                    title: 'Scholarship and Ranking',
                    to: '/scholarship',
                    icons: 'bi bi-award'
                },
                {
                    title: 'Academic Years',
                    to: '/academic',
                    icons: 'bi bi-calendar'
                },
                {
                    title: 'Course Managements',
                    to: '/course',
                    icons: 'bi bi-bookmark-fill',
                },
                {
                    title: 'Transfer Credits',
                    to: '/transfer',
                    icons: 'bi bi-arrow-down-up',
                },
                {
                    title: 'Finances',
                    to: '/finances',
                    icons: 'bi bi-credit-card-fill',
                },
            ],
        }
    },

    methods: {
        closeMenu() {
            this.store.activeSidebar = !this.store.activeSidebar
        }
    }
}

</script>


