export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    return (current.needs || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
      .concat(prev);
    }, []);
    
    if(needs) {
      return Promise.all(needs.map(need => dispatch(need(params))));
    }
    
    return new Promise(() => resolve({}));
}