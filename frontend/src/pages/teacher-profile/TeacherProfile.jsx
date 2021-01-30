import TeacherCard from './../../components/teacher-card/TeacherCard'
import teacher from './8.png'

const TeacherProfile = () => {
    return(
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <TeacherCard 
                            name="Johan"
                            lastname="Castillo"
                            image={teacher}
                            stars={4}
                            description="Desarrollador Web Full-Stack"
                            category="Desarrollo de Software"
                            country="Caracas, Venezuela"
                        />
                    </div>

                    <div className="col-md-8">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherProfile
