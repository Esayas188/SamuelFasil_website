import project1 from '../img/icon/project1.jpg'
import project2 from '../img/icon/project2.jpg'
import project3 from '../img/icon/project3.jpg'
import project4 from '../img/icon/project4.jpg'


const Gallery = () => {
    return ( 




<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-[60px]  p-[40px]">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project2}  alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project4}  alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project1} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={project4} alt=""/>
        </div>
    </div>
</div>


     );
}
 
export default Gallery;