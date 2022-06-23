import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [search, setSearch] = useState('academia');
	const [sortGoodBad, setSortGoodBad] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=15af131d6af476c2fabd030b719744ab&query=${search}&language=en-EN`
			)
			.then((res) => setMoviesData(res.data.results));
	}, [search]);

	return (
		<div className='form-component'>
			<div className='form-container'>
				<form>
					<input
						type='text'
						placeholder='Choose your movie'
						id='search-input'
						onChange={(e) => setSearch(e.target.value)}
					/>
					<input type='submit' name='' value='search' />
				</form>
				<div className='btn-sort-container'>
					<div
						className='btn-sort'
						id='goodToBad'
						onClick={() => setSortGoodBad('goodToBad')}>
						TOP<span>&#8658;</span>
					</div>
					<div
						className='btn-sort'
						id='badToGood'
						onClick={() => setSortGoodBad('badToGood')}>
						BAD<span>&#8658;</span>
					</div>
				</div>
			</div>
			<div className='result'>
				{moviesData
					.slice(0, 12)
					.sort((a, b) => {
						if (sortGoodBad === 'goodToBad') {
							return b.vote_average - a.vote_average;
						} else if (sortGoodBad === 'badToGood') {
							return a.vote_average - b.vote_average;
						} else {
							return moviesData.slice(0, 12);
						}
					})
					.map((movie) => (
						<Card key={movie.id} movie={movie} />
					))}
			</div>
		</div>
	);
};

export default Form;
