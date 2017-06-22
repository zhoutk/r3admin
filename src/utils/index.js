/**
 * Created by zhoutk on 17/5/20.
 */
import uuid from 'uuid';

const getId = () => {
    return uuid.v1().split('-')[0];
}
export {getId};
