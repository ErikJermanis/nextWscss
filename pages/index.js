import FirstComponent from '../components/firstcomponent';
import Layout from '../components/Layout';

class IndexPage extends React.Component {
  render() {
    return(
      <Layout>
        <div>
          <p>Mater</p>
          <FirstComponent />
        </div>
      </Layout>
    )
  }
}

export default IndexPage;