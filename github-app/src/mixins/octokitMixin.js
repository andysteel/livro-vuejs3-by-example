// import { Octokit } from '@octokit/rest';

export const octoKitMixin = {
    methods: {
        createOctokitClient() {
            return new window.Octokit({
                auth: localStorage.getItem('github-token')
            })
        }
    }
}