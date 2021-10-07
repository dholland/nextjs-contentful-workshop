import Page from '@/ui/page';

export default function Home() {
	return (
		<Page title='Page Title' description='My Starter Nextjs with Tailwind JIT'>
			<main className='flex flex-col h-full bg-red-200'>
				<h1 className='text-6xl text-center '>
					NextJs Starter with Tailwind JIT
				</h1>
			</main>
		</Page>
	);
}
