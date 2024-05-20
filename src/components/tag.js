import {useState, useEffect} from 'react';
import '../css/index.css';


function Tag({type}) {
    const [name, setName] = useState('Visual Basic');
    const [className, setClassName] = useState('tag-vb');

    useEffect(() => {
        switch (type) {
            case 'vb':
                setName("Visual Basic")
                setClassName("tag-vb")
              break;
            case 'react':
                setName("React")
                setClassName("tag-react")
              break;
            case 'python':
                setName("Python")
                setClassName("tag-python")
              break;
              case 'java':
                setName("Java")
                setClassName("tag-java")
              break;
              case 'qc':
                setName("Quantum Computing")
                setClassName("tag-qc")
              break;
            default:
              // Do something if value doesn't match any case
              break;
          }
    }, [])

      

  return (
    <span className={className}>{name}</span>
  );
}

export default Tag;