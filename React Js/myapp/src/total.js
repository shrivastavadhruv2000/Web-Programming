function Total({nums})
{
    let addition=0
    for(let i=0;i<nums.length;i++){
        addition +=nums[i]
    }

    return (
        <p>total={addition}</p>
    )
}

export default Total;