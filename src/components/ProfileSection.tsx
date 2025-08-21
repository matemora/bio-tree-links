import './profile-section.css';
import profilePicture from '../assets/profile-picture.jpg';

export function ProfileSection() {
    return (
        <div className="profile-section">
            <div className="profile-picture">
                <img src={profilePicture} alt="Profile Picture" />
            </div>
            <h1 className="name">Mateus Morais</h1>
            <p className="description">Apaixonado por tecnologia. Amo dar aulas pro pessoal da Turma 3 da Koru</p>
        </div>
    );
}