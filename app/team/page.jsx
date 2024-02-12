
import Brands from '../components/Brands';
import Contacts from '../components/Contacts';
import Team from '../components/Team';

const Page = () => {
    return (
        <div>
            <h1>Team</h1>
            <Team/>
            <Contacts/>
            <Brands/>
        </div>
    );
};

export default Page;