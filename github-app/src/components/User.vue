<template>
    <div>
        <h1>User Info</h1>
        <ul>
            <li>
                <img :src="userData.avatar_url" id="avatar" alt="avatar"/>
            </li>
            <li>username: {{userData.login}}</li>
            <li>followers: {{userData.followers}}</li>
            <li>plan: {{userData.pla && userData.plan.name}}</li>
        </ul>
    </div>
</template>

<style scoped>
#avatar {
    width: 50px;
    height: 50px;
}
</style>

<script>
import { octoKitMixin } from "../mixins/octokitMixin";

export default {
    name: 'GithubUser',
    data() {
        return {
            userData: {
                'avatar_url': '',
                login: '',
                followers: 0,
                pla: '',
                plan: {
                    name: ''
                }
            }
        }
    },
    mixins: [octoKitMixin],
    async mounted() {
        const octokit = this.createOctokitClient();
        const {data: userData} = await octokit.request('/user');
        this.userData = userData;
    },
    methods: {
        saveToken() {}
    }
}
</script>