
import React from "react";
import { Container, Row } from "reactstrap";
import moment from "moment";

class TableHistory extends React.Component {
 constructor(props) {
   super(props)
 this.state={

 }
   
 }
render() {
const {table} = this.props;

  return (

  <section style={{margin:"30px 0px"}}>
          <Container>
              <Row>
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content usert-list">
                      <table>
                        <thead>
                          <tr>
                            <th>Wallet ID</th>
                            <th>Credited Amount </th>
                            <th>Received Crypto</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        
                       {this.props.table.length > 0 ? this.props.table.map((table) =>{


                                return<>
                                <tr>
                                <td className="product-thumbnail">{table._id}</td>
                  
                  
                              
                                <td className="product-thumbnail">{table.add_amount}</td>
                                <td className="product-thumbnail">{table.walletId?.reqamount}</td>
                               
                                <td className="product-thumbnail">{moment(table.createdAt).format("ll")}</td>
                             

                              
                                </tr>
                        
                      </> }): null} 
                              
                      </table>
                    </div>
                  </div>
              </Row>
          </Container> 
        </section>
     
    );
  }
}
export default TableHistory;