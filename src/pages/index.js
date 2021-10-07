import Page from '@/ui/page';

export default function Home() {
	return (
		<Page title='Page Title' description='My Starter Nextjs with Tailwind JIT'>
			<main className='flex flex-col'>
				<h1 className='text-6xl text-center'>Content</h1>
			</main>
		</Page>
	);
}
