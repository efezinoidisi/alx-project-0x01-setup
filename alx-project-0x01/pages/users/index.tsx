import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='p-4'>
        <h1 className=' text-2xl font-semibold'>Users Content</h1>

        <div className='grid grid-cols-3 gap-2 '>
          {posts.map(
            (
              { id, email, address, company, website, phone, username, name },
              key: number
            ) => (
              <UserCard
                company={company}
                id={id}
                key={key}
                username={username}
                name={name}
                address={address}
                email={email}
                website={website}
                phone={phone}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
