import Layout from '../layout/Layout';
import Rooms from '../components/rooms/Rooms'
import { useCookies } from 'react-cookie';

export default function App() {
  const [cookies, setCookie, removeCookies] = useCookies(['loginToEasyChat']);

  return(
    <Layout>
      <Rooms/>
    </Layout>
  )
}