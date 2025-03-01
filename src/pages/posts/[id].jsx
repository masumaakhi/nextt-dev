import { useRouter } from "next/router";
const PostDetails = ({ post }) => {
	const router = useRouter();
	if (router.isFallback) {
		<p>Loading The Page</p>;
	}
	return (
		<div>
			<h2>Details page of {post?.id}</h2>
			<h2>{post?.title}</h2>
			<p>{post?.body}</p>
			<p>{post?.userId}</p>
			{/* <h4>Henten</h4> */}
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
	const posts = await res.json();
	return {
		paths: posts.map((post) => {
			return {
				params: { id: post.id.toString() },
			};
		}),
		// paths: [
		// 	{
		// 		params: {
		// 			id:
		// 		},
		// 	}, // See the "paths" section below
		// ],
		fallback: true, // false or "blocking"
	};
}

export async function getStaticProps(context) {
	const { id } = context.params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5${id}`);
	const post = await res.json();
	return {
		props: {
			post,
		},
	};
}

export default PostDetails;