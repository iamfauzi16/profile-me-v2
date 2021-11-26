import Navbar from "./components/Navbar";
import Container from "./components/Container";

import Content from "./components/Content";
import About from "./components/About";
import Banner from "./components/Banner";

import Dribbble from "./components/Dribbble";


import axios from 'axios';
import{ useState, useEffect } from 'react';




export default function App() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [dribbbleData, setDribbbleData] = useState([])
  const access_token = `81de1f19592050b044ab40d29d6b95468e7845d037ddda85e9ebc7817214b199`
  useEffect(() => {
    async function fetchDribbble() {
      setLoading(true)
      try {
        const res = await axios.get(`https://api.dribbble.com/v2/user/shots/?access_token=${access_token}`)
        
        setDribbbleData(res.data)
        setLoading(false)
      } catch (error) {
        console.error(error)

        setError(true)
        setLoading(false)
      }

     
    }
  
    fetchDribbble()
  }, [])
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <About />
      <Container>
      {loading && <p>Loading...</p>}
        {error && <p>error...</p>}
        {dribbbleData.length > 0 && <Dribbble dribbbleData={dribbbleData} />}
      </Container>
     
    </>
  );
}
