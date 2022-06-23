/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const Userlist = () => {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		let moviesId = window.localStorage.movies
			? window.localStorage.movies.split(',')
			: [];

		for (let i = 0; i < moviesId.length; i++) {
			axios
				.get(
					`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=15af131d6af476c2fabd030b719744ab&language=en-EN`
				)
				.then((res) => setListData((listData) => [...listData, res.data]));
		}
	}, []);

	return (
		<div className='user-list-page'>
			<Header />
			<h2>
				My wishlist <span>💖</span>
			</h2>
			<div className='result'>
				{listData.length > 0 ? (
					listData.map((movie) => <Card movie={movie} key={movie.id} />)
				) : (
					<h2>No wishlist for the moment</h2>
				)}
			</div>
		</div>
	);
};

export default Userlist;
