import { UserModel } from '@models/User.model';
import { connectToDB } from '@utils/database';
import NextAuth from 'next-auth';
import GoogleProvider  from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })],
    async session({session}){
        const sessionUser = await UserModel.findOne({email: session.user.email})
        session.user.id = sessionUser._id.toString()
        return session
    },
    async signiIn({profile}){
        try {
            await connectToDB()
            const userExist = await UserModel.findOne({email:profile.email})

            if(!userExist){
                await UserModel.create({email:profile.email,username:profile.name.replace(" ","").toLowerCase(),image:profile.picture})
            }
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    },
})

export {handler as GET, handler as POST}