/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let intriangles=[];
  let triangles=0;
  preferences.forEach((v,i,a)=>{
    if (intriangles.every(z=>z!=v)){
      let second=a[v-1];
      let third=a[second-1];
      if (third==(i+1)&&second!=third&&v!=second&&v!=third){
        intriangles.push(v,second,third);
        triangles++;
      }
      
    }
  })
  return triangles;
};
