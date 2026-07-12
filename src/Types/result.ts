export type Result<T, E = Error> =

    | { success: true, value: T }
    | { success: false, error: E }


export function ok<T>(value: T): Result<T, never> {

    return { success: true, value }

}


export function err<E>(error: E): Result<never, E> {

    return { success: false, error }

}


export function isOk<T, E>(result: Result<T, E>): boolean {

    return result.success
}


export function parseError(e: unknown): Error {

    const error_string = String(e)

    return Error(error_string)

}
