import React from 'react';
import {connect} from 'dva';
import {Table,Pagination,Popconfirm} from 'antd';
import styles from './Users.css';
import {PAGE_SIZE} from '../../constants';
 

function Users({list:dataSource,total,page:current}) {
  // return (
  //   <div className={styles.normal}>
  //     Component: Users
  //   </div>
  // ); 
	function deleteHandler(id){
		console.warn(`TODO;$(id)`);
	}

	const columns=[
		{
			title:'Name',
			dataIndex:'name',
			key:'Name',
			render:text=><a href=''>{text}</a>,
		},
		{
			title:'Email',
			dataIndex:'email',
			key:'email',
		},
		{
			title:'Website',
			dataIndex:'website',
			key:'website',
		},
		{
			title:'Operation',
			key:'opreation',
			render:(text,{id})=>(
				<span className={styles.opreation}>
					<a hred=''>Edit</a>
					<Popconfirm title='Confirm to delete?' onConfirm={deleteHandler.bind(null,id)}>
						<a href=''>Delete</a>
					</Popconfirm>
				</span> 
			),
		},
	]; 
  
	return (
		<div className={styles.normal}>
			<div>
				<Table 
					columns={columns}
					dataSource={dataSource}
					rowKey={record => record.id}
					pagination={false}
				/>
				<Pagination
					className='ant-table-pagination'
					total={total}
					current={current}
					pageSize={PAGE_SIZE}
				/> 
			</div>
		</div>
		);
}

function mapStateToProps(state){ 
	const{ list,total,page}=state.users; 
	return{
		list,
		total,
		page,
	};
}

export default connect(mapStateToProps)(Users);
