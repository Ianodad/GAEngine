import React, { Component } from 'react';
import http from "../services/httpService"
import Layout from './Layout';


const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api'
console.log(process.env.NODE_ENV)

const getServices = () => {
  
  console.log(http.get(apiUrl + '/services'))
  return http.get(apiUrl + '/services')
}


class Home extends Component {
    state = {
        services:[]
    };

//   constructor() {
//     super();
//   }

  async componentDidMount() {
    try {
      const { data } = await getServices()
      this.setState({ services:data });
      console.log(data)
    } catch (error) {
      console.log(error);
    }
     
  }


  render () {
    const {services} = this.state 
    return (
    <Layout>
        <div className="App">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              {
               services && (

                services.map(service => (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                  </tr>
                ))
               ) 
              }
              </tbody>
            </table>
        </div>
    </Layout>
    )
  }
}
export default Home;