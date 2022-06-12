
import Profile from "./components/social-profile/Profile";
import profile from "./components/social-profile/user.json";

export default function App() {
    return (
        <div>
            <Profile
                username={profile.username}
                tag={profile.tag}
                location={profile.location}
                avatar={profile.avatar}
                followers={profile.stats.followers}
                views={profile.stats.views}
                likes={profile.stats.likes}
            />
        </div>
    ); 
}