import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailView from '@/components/templates/KbnTaskDetailView.vue'

export default [{
    path: '/',
    components: KbnBoardView,
    meta: { requireAuth: true}
}, {
    path: '/login',
    components: KbnLoginView,
    meta: { requireAuth: true}
}, {
    path: '/tasks/:id',
    components: KbnTaskDetailView,
    meta: { requireAuth: true}
}, {
    path: '*',
    redirect: '/'
}]
