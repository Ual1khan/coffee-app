import { all, call, put, SagaReturnType, select, takeLatest } from "@redux-saga/core/effects";
import { getAllAdditionals, getAllCoffees, postAllOrders } from "../../services/coffee.service";
import { failedFetching, startFetching, successFetching } from "../loading/loading.slice";
import { selectOrders } from "./coffee.selector";
import { 
    fetchCoffees, 
    fetchCoffeesSuccess, 
    fetchAdditionals, 
    fetchAdditionalsSuccess, 
    postOrders, 
    postOrdersSuccess,
    IOrder,
} from "./coffee.slice";

export function* onFetchCoffees() {
    yield put(startFetching(fetchCoffees.type));

    try {
        const res: SagaReturnType<typeof getAllCoffees> = yield getAllCoffees();
        const coffees = res.data;

        yield put(fetchCoffeesSuccess(coffees));
        yield put(successFetching(fetchCoffees.type));
    } catch (error: any) {
        yield put(
            failedFetching({ name: fetchCoffees.type, error: error?.message as string })
        );
    }
}

export function* onFetchAdditionals() {
    yield put(startFetching(fetchAdditionals.type));
    try {
        const res: SagaReturnType<typeof getAllAdditionals> = yield getAllAdditionals();
        const additionals = res.data;

        yield put(fetchAdditionalsSuccess(additionals));
        yield put(successFetching(fetchAdditionals.type));
    } catch (error: any) {
        yield put(
            failedFetching({ name: fetchAdditionals.type, error: error?.message as string })
        );
    }
}

export function* onPostOrders() {
    yield put(startFetching(postOrders.type));
    const state: IOrder[] = yield select(selectOrders);
    try {
        const res: SagaReturnType<typeof postAllOrders> = yield postAllOrders(state);
        console.log(res);
        yield put(postOrdersSuccess(res.data));
        yield put(successFetching(postOrders.type));
    } catch (error: any) {
        yield put(
            failedFetching({ name: postOrders.type, error: error?.message as string })
        );
    }
}

export function* onFetchCoffeesStart() {
    yield takeLatest(fetchCoffees.type, onFetchCoffees);
}

export function* onFetchAdditionalsStart() {
    yield takeLatest(fetchAdditionals.type, onFetchAdditionals);
}

export function* onPostOrdersStart() {
    yield takeLatest(postOrders.type, onPostOrders);
}

export default function* coffeesSaga() {
    yield all([call(onFetchCoffeesStart), call(onFetchAdditionalsStart), call(onPostOrdersStart)]);
}
