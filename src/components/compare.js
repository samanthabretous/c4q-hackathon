//LIBRARIES
import React from 'react';
import {connect} from "react-redux";
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import _ from 'lodash';

import AfterSchoolIcon from './icons/AfterSchoolIcon';

//STYLING
import { Segment, Header, List, Button, Divider, Icon, Popup, Image } from 'semantic-ui-react';
import '../App.css';

//STATE
const mapState = state => ({
    users: state.users,
    threeSchools: state.threeSchools
});


class Compare extends React.Component {
	onMapCreated(map) {
		//Creates Google map display.
	} 
	render() {
		return (
		  <div>
		  	<div className='gmaps'>
		      <Gmaps
		        width={'1500px'}
		        height={'425px'}
		        lat={40.663603}
		        lng={-73.891916}
		        zoom={12}
		        onMapCreated={this.onMapCreated}>
		      	<InfoWindow
			      lat={40.702552}
			      lng={-73.984016}
			      content={'Home'}
			      onCloseClick={this.onCloseClick} />

					<Marker
						lat={this.props.threeSchools.threeSchools[0].val.latitude}
						lng={this.props.threeSchools.threeSchools[0].val.longitude}/>
					<Marker
						lat={this.props.threeSchools.threeSchools[1].val.latitude}
						lng={this.props.threeSchools.threeSchools[1].val.longitude}/>
					<Marker
						lat={this.props.threeSchools.threeSchools[2].val.latitude}
						lng={this.props.threeSchools.threeSchools[2].val.longitude}/>
				</Gmaps>
		      </div>
		      <center>
				<div className="flex-grid">
					<Segment.Group horizontal>
					{!this.props.threeSchools ?	null :

				(this.props.threeSchools.threeSchools.map((school, idx)=>{
							return (
								<Segment color='blue' >
							      	 <Header as='h4' icon>
							      	 	<Icon name = 'student' />
						 				{school.val.location_name}
									</Header>
									<br />



									<List>

										<List.Item><strong>Math Score:</strong> {school.val.math.mean_scale_score}</List.Item>

										<List.Item><strong>English Score:</strong> {school.val.english.mean_scale_score}</List.Item>

										<List.Item><strong>Attendance:</strong> {school.val.attendance._of_attd_taken+'%'}</List.Item>

										<br />



										<List.Item>
											<List.Icon name='marker' />
											<List.Content>{school.val.primary_address}</List.Content>
										</List.Item>

										<List.Item>
											<List.Icon name='mail' />
											<List.Content>{school.val.principal_email}</List.Content>
										</List.Item>
										<List.Item>
	                    <Popup
	                      trigger={<List.Icon circular name='rocket' />}
	                      flowing
	                      hoverable
	                      >
	                      <AfterSchoolIcon />
	                    </Popup>
										</List.Item>


									  </List>
							      </Segment>
							)
						})) }
			      </Segment.Group>
				</div>

				<Button primary onClick={this.handleClick}>Print</Button></center>
		  </div>
		);
	}
};

// const mapDispatch(dispatch) {
// 	return bindActionCreator({getSchools, sfsdffd, sfds ssmfs}, dispatch)
// }

export default connect(mapState)(Compare);
//second prop is automatically dispatch.
