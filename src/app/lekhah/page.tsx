import { getAllBlogs } from './blogs';
import BlogList from './BlogList';

export default function LekhahPage() {
  const blogs = getAllBlogs();
  return <BlogList blogs={blogs} />;
}
