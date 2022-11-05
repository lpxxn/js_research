import { useSearchParams, useParams } from 'react-router-dom'

function About () {
  // useParams /about/:id
  // useParams 如果在useParams 下面报错，没明白为什么
  let params2 = useParams()
  console.log(`use useParams ${params2}`)

  // useSearchParams  ?id=1&name=jack
  const [params] = useSearchParams()
  console.log(params)
  const id = params.get('id')
  const name = params.get('name')
  const names = params.getAll('name')
  if (name.length === 0) {
    return <div>no name</div>
  }


  return (
    <div>
      <h2>About 得到的id: {id} name: {name}, allNames: {names}</h2>
      <p>useParams id: {params2.id}</p>
    </div>
  )
}

export default About