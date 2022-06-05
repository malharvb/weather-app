import { handle } from './modules/APIhandler';
import { domObj } from './modules/DOM';

const inp = document.querySelector('#inp');
const search = document.querySelector('#search');

search.addEventListener('click', async () => {
  if (inp.value === '') return;
  const city = inp.value;
  const data = await handle.fetchFn(city);
  const reducedObj = handle.convertData(data);
  domObj.populateTile(reducedObj);
});
