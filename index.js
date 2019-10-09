const indicator = ids => {
  let index = []
  ids = ids.split(':')
  ids.forEach(id => {
    referenceText.forEach((ref, idx) => {
      if (ref.id === id) index.push(idx + 1)
    })
  })
  return `<sup>${ index.sort((a,b) => a-b).join() }</sup>`
}

const references = document.querySelectorAll('ref')

const referenceText = [
  { id: 'bmj-100', copy: 'repudiandae(2), possimus(3): This is a reference' },
  { id: 'bmj-200', copy: 'molestias: This is a reference' },
  { id: 'bmj-500', copy: 'possimus: This is a reference' },
  { id: 'bmj-300', copy: 'possimus(2): This is a reference' },
  { id: 'bmj-700', copy: 'repudiandae: This is a reference' },
  { id: 'bmj-150', copy: 'nothing: This is a reference' },
]

references.forEach(reference => {
  reference.insertAdjacentHTML('afterend', indicator(reference.id))
  reference.remove()
})

referenceText.forEach((text, index) => {
  const copy = `<p><small><sup>${ index + 1 }</sup>${ text.copy }</small></p>`
  document.querySelector('footer').insertAdjacentHTML('beforeend', copy)
})