import {useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='mt-[80px]'>
      <h1 className='font-bold mx-auto text-center'>Home</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
       industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <button onClick={()=>navigate('OrderSummary')}>Placeholder</button>
    </div>
  )
}

export default Home
