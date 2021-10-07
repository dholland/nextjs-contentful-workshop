import Container from '@/ui/container';

export default function Layout({ children }) {
	return (
		<div className='min-h-screen flex flex-col'>
			<header className='bg-gray-700 text-white p-8'>
				<Container>
					<nav className='text-center text-5xl'>Blog</nav>
				</Container>
			</header>
			<div className='flex-grow'>{children}</div>
			<footer className='bg-gray-300 text-white p-8'>
				<Container>footer</Container>
			</footer>
		</div>
	);
}
