import { StackActions, createNavigationContainerRef } from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef<any>()

export function navigate(name: any, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function push(name: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params))
  }
}

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export function replace(name: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params))
  }
}

export function pop(count: number = 1): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.dispatch(StackActions.pop(count))
  }
}

// export function reset(index: number, routes: Array<{ name: string; params?: object }>): void {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(StackActions.replace(name, ));
//   }
// }