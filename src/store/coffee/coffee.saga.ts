import { all, call, put, SagaReturnType, takeLatest } from "@redux-saga/core/effects";
import { getAllAdditionals, getAllCoffees } from "../../services/coffee.service";
import { failedFetching, startFetching, successFetching } from "../loading/loading.slice";
import { fetchCoffees, fetchCoffeesSuccess, fetchAdditionals, fetchAdditionalsSuccess } from "./coffee.slice";

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

export function* onFetchCoffeesStart() {
    yield takeLatest(fetchCoffees.type, onFetchCoffees);
}

export function* onFetchAdditionalsStart() {
    yield takeLatest(fetchAdditionals.type, onFetchAdditionals);
}

export default function* coffeesSaga() {
    yield all([call(onFetchCoffeesStart), call(onFetchAdditionalsStart)]);
}
