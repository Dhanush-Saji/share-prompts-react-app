import Feeds from "@components/Feeds"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
      Promptjumper is and open-source AI prompting tool for modern world to discover, create and share creative prompts
      </p>
      <Feeds />
    </section>
  )
}

export default Home

// To get NEXTAUTH_SECRET, enter the below command in the website
// openssl rand -base64 32
// https://www.cryptool.org/en/cto/openssl

// add http://localhost:3000/api/auth/callback/google in the google auth