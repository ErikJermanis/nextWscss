import Head from 'next/head';
import '../scss/style.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Head>
          <title>Majmunska stranica</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <meta lang="hr" />
        </Head>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;