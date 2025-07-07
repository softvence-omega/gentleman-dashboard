import { baseApi } from "../../api/baseApi";

const loginApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
       login: builder.mutation({
            query : (userInfo) => ({
                url : '/auth/login',
                method: 'POST',
                body : userInfo,
            })
        })
    }),
})

export const {useLoginMutation} = loginApi;