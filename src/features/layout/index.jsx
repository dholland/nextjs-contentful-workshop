import Container from '@/ui/container';

export default function Layout({ children }) {
	return (
		<>
			<header className='bg-gray-700 text-white p-8'>
				<Container>Bloom MT</Container>
			</header>
			{children}
			<footer className='bg-gray-300 text-white p-8'>
				<Container>footer</Container>
			</footer>
		</>
	);
}
