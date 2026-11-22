export function checkCapacity(quantity,seats){return Number.isInteger(quantity)&&quantity>=1&&quantity<=Math.min(4,seats)}
export function eligible(item,experience){return item.level!=='Intermediate'||experience==='experienced'}
export function deliveryFee(area){return area==='Islamabad' ? 0 : null}
