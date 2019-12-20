import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const axios = require('axios')


function IndexPage(){
    const [message, setMessage] = useState()

    useEffect(() =>{
        getLambda()    
    })
    
    async function getLambda() {
        try {
          const response = await axios({method:'get', url:'https://4l7ebvaa12.execute-api.us-east-2.amazonaws.com/Dev/articles'});
          console.log(response);
          setMessage(response.data)
        } catch (error) {
          console.error(error);
        }
    }
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
                
            </div>
            {message}
            <br/>
            <Link to="/page-2/">Go to page ah</Link>
        </Layout>
    )
}

export default IndexPage
