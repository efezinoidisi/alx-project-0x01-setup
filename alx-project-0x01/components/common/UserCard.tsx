import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  email,
  address,
  company,
  website,
  phone,
  username,
  name,
}) => {
  return (
    <div className='w-full max-w-2xl  mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='text-gray-800 space-y-2'>
        <p>UserId: {id}</p>
        <h2>
          {name} @{username}
        </h2>
        <p>{email}</p>
      </div>
      <hr className='border-gray-300 my-3' />

      <div className='text-gray-600 space-y-3'>
        <h3 className='text-center border-b border-gray-300 pb-3 mb-3'>
          Company details
        </h3>

        <SimpleCard title='Name:' value={company.name} />
        <SimpleCard
          title='Statement:'
          value={company.bs}
          className='flex flex-col gap:2'
        />
        <SimpleCard
          title='CatchPhrase:'
          value={company.catchPhrase}
          className='flex flex-col gap:2'
        />
      </div>

      <hr className='border-gray-300 my-3' />

      <div className='text-gray-600'>
        <h3 className='text-center border-b border-gray-300 pb-3 mb-3'>
          Other Details
        </h3>

        <SimpleCard title='Phone:' value={phone} />

        <SimpleCard title='Website:' value={website} />

        <SimpleCard
          title='Address:'
          value={`${address.street}, ${address.city}`}
          className='flex flex-col gap:2'
        />
      </div>
    </div>
  );
};

function SimpleCard({
  title,
  value,
  className = '',
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className || 'flex items-center gap-2 justify-between'}>
      <span className='font-medium'>{title}</span>
      <span>{value}</span>
    </div>
  );
}

export default UserCard;
