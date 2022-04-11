// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { AddDishes, db, onAuthStateChanged, restaurantForm } from './firebase'
// import { getDocs } from './firebase'
// import { Card, Avatar } from 'antd'
// import { Spin, Space } from 'antd'
// import bibi from '../component/bibimbap.png'
// import salad from '../component/salad.png'
// import { doc, getDoc, query, where } from 'firebase/firestore'

// const { Meta } = Card
// let resturantsDishUid

// const MainRestaurant = () => {
//   const params = useParams()
//   console.log(params)

//   const [item, setItem] = useState([])
//   //   const navigate = useNavigate()

//   //   const click = () => {
//   //     navigate('/AllDishes')
//   //   }
//   useEffect(async () => {
//     Restaurant()
//     // const time = setTimeout(navigate('/AllDishes'), 3000)
//   })
//   const Restaurant = async () => {
//     const querySnapshot = await getDocs(AddDishes)
//     let ShowRestaurant = []
//     querySnapshot.forEach(doc => {
//       ShowRestaurant.push({ id: doc.id, ...doc.data() })
//     })
//     setItem(ShowRestaurant)
//   }

//   // const [FooDish, setFooDish] = useState([])

//   // const [loading, setLoading] = useState(false)
//   // const navigate = useNavigate()
//   // const params = useParams()
//   // const getUidRestaurantDish = doc(db, 'restaurantForms', params.id)
//   // console.log('=====',params.id)
//   // useEffect(async () => {
//   //   getMYRestaurantDish()
//   // }, [])
//   // const getMYRestaurantDish = async () => {
//   //   const items = await getDoc(getUidRestaurantDish)
//   //   console.log('object of restaurent=>', items.data().uid)
//   //   resturantsDishUid = items.data().uid
//   //   console.log('uidddd==>', resturantsDishUid)

//   //   const q = query(AddDishes, where('uid', '==', resturantsDishUid))

//   //   const querySnapshot = await getDocs(q)
//   //   let dish = []
//   //   querySnapshot.forEach(doc => {
//   //     dish.push({ id: doc.id, ...doc.data() })
//   //   })
//   //   setFooDish(dish)
//   //   console.log('============', FooDish)
//   // }
//   return (
//     <>
//       <div>
//         <h1 className='h'> Dash Board</h1>
//         <Link to={'/AddFood'}>
//           <button>Add Dishes</button>
//         </Link>
//         <br /> <br />
//         <Link to={'/Order'}>
//           <button>My Order</button>
//         </Link>
//         <div className='container_event'>
//           {item.map((data, index) => {
//             return (
//               <Card
//                 style={{
//                   width: 250,
//                   height: 130,
//                   margin: 16,
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   display: 'inline-block',
//                   border: '2px solid black'
//                 }}
//                 cover={
//                   <img
//                     alt='example'
//                     src={data.picture}
//                     className={'event_img'}
//                     style={{
//                       width: 250,
//                       height: 130,
//                       justifyContent: 'center !important',
//                       alignItems: 'center !important',
//                       margin: 'auto'
//                     }}
//                   />
//                 }
//                 actions={
//                   [
//                     // <img
//                     //   src={cutlery}
//                     //   alt='food background'
//                     //   style={{ height: 30, width: 30 }}
//                     // />,
//                     // <img
//                     //   src={diet}
//                     //   alt='food background'
//                     //   style={{ height: 30, width: 30 }}
//                     //   onClick={click}
//                     // />
//                   ]
//                 }
//               >
//                 <Meta
//                   style={{ margin: 'auto' }}
//                   avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
//                   title={data.name}
//                   description={data.city}
//                   price={data.price}
//                 />
//               </Card>
//             )
//           })}
//         </div>
//         {/* <div className='container_event'>
//         {FooDish.map((data, index) => {
//           return (
//             <Card
//               className='card'
//               style={{
//                 width: 250,
//                 height: 130,
//                 margin: 16,
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 display: 'inline-block'
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src={data.picture}
//                   className={'event_img'}
//                   style={{
//                     width: 250,
//                     height: 130,
//                     justifyContent: 'center !important',
//                     alignItems: 'center !important',
//                     margin: 'auto'
//                   }}
//                 />
//               }
//               actions={[
//                 <img
//                   src={bibi}
//                   alt='food background'
//                   style={{ height: 30, width: 30 }}
//                 />,
//                 <Link to={"/Order"}>
//                 <button>Order Now</button>
//                 </Link>
//               ]}
//             >
//               <Meta
//                 className='meta'
//                 style={{ margin: 'auto' }}
//                 avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
//                 title={data.name}
//                 // description={data.city}
//                 // price={data.price}
//               />
//             </Card>
//           )
//         })}
//       </div> */}
//       </div>
//     </>
//   )
// }
// export default MainRestaurant
