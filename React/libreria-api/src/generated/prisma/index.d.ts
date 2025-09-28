
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Libro
 * 
 */
export type Libro = $Result.DefaultSelection<Prisma.$LibroPayload>
/**
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>
/**
 * Model Seccion
 * 
 */
export type Seccion = $Result.DefaultSelection<Prisma.$SeccionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libro`: Exposes CRUD operations for the **Libro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libro.findMany()
    * ```
    */
  get libro(): Prisma.LibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seccion`: Exposes CRUD operations for the **Seccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seccions
    * const seccions = await prisma.seccion.findMany()
    * ```
    */
  get seccion(): Prisma.SeccionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Libro: 'Libro',
    Autor: 'Autor',
    Seccion: 'Seccion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "libro" | "autor" | "seccion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Libro: {
        payload: Prisma.$LibroPayload<ExtArgs>
        fields: Prisma.LibroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findFirst: {
            args: Prisma.LibroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findMany: {
            args: Prisma.LibroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          create: {
            args: Prisma.LibroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          createMany: {
            args: Prisma.LibroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          delete: {
            args: Prisma.LibroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          update: {
            args: Prisma.LibroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          deleteMany: {
            args: Prisma.LibroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          upsert: {
            args: Prisma.LibroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibro>
          }
          groupBy: {
            args: Prisma.LibroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibroCountArgs<ExtArgs>
            result: $Utils.Optional<LibroCountAggregateOutputType> | number
          }
        }
      }
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      Seccion: {
        payload: Prisma.$SeccionPayload<ExtArgs>
        fields: Prisma.SeccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findFirst: {
            args: Prisma.SeccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findMany: {
            args: Prisma.SeccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          create: {
            args: Prisma.SeccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          createMany: {
            args: Prisma.SeccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          delete: {
            args: Prisma.SeccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          update: {
            args: Prisma.SeccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          deleteMany: {
            args: Prisma.SeccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          upsert: {
            args: Prisma.SeccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          aggregate: {
            args: Prisma.SeccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeccion>
          }
          groupBy: {
            args: Prisma.SeccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeccionCountArgs<ExtArgs>
            result: $Utils.Optional<SeccionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    libro?: LibroOmit
    autor?: AutorOmit
    seccion?: SeccionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    libro: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | UserCountOutputTypeCountLibroArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
  }


  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    libro: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | AutorCountOutputTypeCountLibroArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
  }


  /**
   * Count Type SeccionCountOutputType
   */

  export type SeccionCountOutputType = {
    libro: number
  }

  export type SeccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | SeccionCountOutputTypeCountLibroArgs
  }

  // Custom InputTypes
  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionCountOutputType
     */
    select?: SeccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeCountLibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nombre: number
    password: number
    createdAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    password?: true
    createdAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    password?: true
    createdAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    password?: true
    createdAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    nombre: string
    password: string
    createdAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    libro?: boolean | User$libroArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nombre?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nombre" | "password" | "createdAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | User$libroArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      libro: Prisma.$LibroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nombre: string
      password: string
      createdAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends User$libroArgs<ExtArgs> = {}>(args?: Subset<T, User$libroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.libro
   */
  export type User$libroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    cursor?: LibroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  export type LibroAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    autorId: number | null
    seccionId: number | null
  }

  export type LibroSumAggregateOutputType = {
    id: number | null
    userId: number | null
    autorId: number | null
    seccionId: number | null
  }

  export type LibroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    genero: string | null
    descripcion: string | null
    imagen: string | null
    userId: number | null
    autorId: number | null
    destacado: boolean | null
    createdAt: Date | null
    seccionId: number | null
  }

  export type LibroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    genero: string | null
    descripcion: string | null
    imagen: string | null
    userId: number | null
    autorId: number | null
    destacado: boolean | null
    createdAt: Date | null
    seccionId: number | null
  }

  export type LibroCountAggregateOutputType = {
    id: number
    titulo: number
    genero: number
    descripcion: number
    imagen: number
    userId: number
    autorId: number
    destacado: number
    createdAt: number
    seccionId: number
    _all: number
  }


  export type LibroAvgAggregateInputType = {
    id?: true
    userId?: true
    autorId?: true
    seccionId?: true
  }

  export type LibroSumAggregateInputType = {
    id?: true
    userId?: true
    autorId?: true
    seccionId?: true
  }

  export type LibroMinAggregateInputType = {
    id?: true
    titulo?: true
    genero?: true
    descripcion?: true
    imagen?: true
    userId?: true
    autorId?: true
    destacado?: true
    createdAt?: true
    seccionId?: true
  }

  export type LibroMaxAggregateInputType = {
    id?: true
    titulo?: true
    genero?: true
    descripcion?: true
    imagen?: true
    userId?: true
    autorId?: true
    destacado?: true
    createdAt?: true
    seccionId?: true
  }

  export type LibroCountAggregateInputType = {
    id?: true
    titulo?: true
    genero?: true
    descripcion?: true
    imagen?: true
    userId?: true
    autorId?: true
    destacado?: true
    createdAt?: true
    seccionId?: true
    _all?: true
  }

  export type LibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libro to aggregate.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libros
    **/
    _count?: true | LibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroMaxAggregateInputType
  }

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
        [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>
  }




  export type LibroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithAggregationInput | LibroOrderByWithAggregationInput[]
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum
    having?: LibroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroCountAggregateInputType | true
    _avg?: LibroAvgAggregateInputType
    _sum?: LibroSumAggregateInputType
    _min?: LibroMinAggregateInputType
    _max?: LibroMaxAggregateInputType
  }

  export type LibroGroupByOutputType = {
    id: number
    titulo: string
    genero: string
    descripcion: string | null
    imagen: string | null
    userId: number
    autorId: number
    destacado: boolean
    createdAt: Date
    seccionId: number | null
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  type GetLibroGroupByPayload<T extends LibroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>
        }
      >
    >


  export type LibroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    genero?: boolean
    descripcion?: boolean
    imagen?: boolean
    userId?: boolean
    autorId?: boolean
    destacado?: boolean
    createdAt?: boolean
    seccionId?: boolean
    seccion?: boolean | Libro$seccionArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    genero?: boolean
    descripcion?: boolean
    imagen?: boolean
    userId?: boolean
    autorId?: boolean
    destacado?: boolean
    createdAt?: boolean
    seccionId?: boolean
    seccion?: boolean | Libro$seccionArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    genero?: boolean
    descripcion?: boolean
    imagen?: boolean
    userId?: boolean
    autorId?: boolean
    destacado?: boolean
    createdAt?: boolean
    seccionId?: boolean
    seccion?: boolean | Libro$seccionArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectScalar = {
    id?: boolean
    titulo?: boolean
    genero?: boolean
    descripcion?: boolean
    imagen?: boolean
    userId?: boolean
    autorId?: boolean
    destacado?: boolean
    createdAt?: boolean
    seccionId?: boolean
  }

  export type LibroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "genero" | "descripcion" | "imagen" | "userId" | "autorId" | "destacado" | "createdAt" | "seccionId", ExtArgs["result"]["libro"]>
  export type LibroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | Libro$seccionArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LibroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | Libro$seccionArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LibroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | Libro$seccionArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LibroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Libro"
    objects: {
      seccion: Prisma.$SeccionPayload<ExtArgs> | null
      autor: Prisma.$AutorPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      genero: string
      descripcion: string | null
      imagen: string | null
      userId: number
      autorId: number
      destacado: boolean
      createdAt: Date
      seccionId: number | null
    }, ExtArgs["result"]["libro"]>
    composites: {}
  }

  type LibroGetPayload<S extends boolean | null | undefined | LibroDefaultArgs> = $Result.GetResult<Prisma.$LibroPayload, S>

  type LibroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroCountAggregateInputType | true
    }

  export interface LibroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Libro'], meta: { name: 'Libro' } }
    /**
     * Find zero or one Libro that matches the filter.
     * @param {LibroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibroFindUniqueArgs>(args: SelectSubset<T, LibroFindUniqueArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibroFindUniqueOrThrowArgs>(args: SelectSubset<T, LibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibroFindFirstArgs>(args?: SelectSubset<T, LibroFindFirstArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibroFindFirstOrThrowArgs>(args?: SelectSubset<T, LibroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libroWithIdOnly = await prisma.libro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibroFindManyArgs>(args?: SelectSubset<T, LibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libro.
     * @param {LibroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     * 
     */
    create<T extends LibroCreateArgs>(args: SelectSubset<T, LibroCreateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {LibroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibroCreateManyArgs>(args?: SelectSubset<T, LibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libros and returns the data saved in the database.
     * @param {LibroCreateManyAndReturnArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibroCreateManyAndReturnArgs>(args?: SelectSubset<T, LibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libro.
     * @param {LibroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     * 
     */
    delete<T extends LibroDeleteArgs>(args: SelectSubset<T, LibroDeleteArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libro.
     * @param {LibroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibroUpdateArgs>(args: SelectSubset<T, LibroUpdateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {LibroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibroDeleteManyArgs>(args?: SelectSubset<T, LibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibroUpdateManyArgs>(args: SelectSubset<T, LibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros and returns the data updated in the database.
     * @param {LibroUpdateManyAndReturnArgs} args - Arguments to update many Libros.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibroUpdateManyAndReturnArgs>(args: SelectSubset<T, LibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libro.
     * @param {LibroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends LibroUpsertArgs>(args: SelectSubset<T, LibroUpsertArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends LibroCountArgs>(
      args?: Subset<T, LibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibroAggregateArgs>(args: Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibroGroupByArgs['orderBy'] }
        : { orderBy?: LibroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Libro model
   */
  readonly fields: LibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seccion<T extends Libro$seccionArgs<ExtArgs> = {}>(args?: Subset<T, Libro$seccionArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    autor<T extends AutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutorDefaultArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Libro model
   */
  interface LibroFieldRefs {
    readonly id: FieldRef<"Libro", 'Int'>
    readonly titulo: FieldRef<"Libro", 'String'>
    readonly genero: FieldRef<"Libro", 'String'>
    readonly descripcion: FieldRef<"Libro", 'String'>
    readonly imagen: FieldRef<"Libro", 'String'>
    readonly userId: FieldRef<"Libro", 'Int'>
    readonly autorId: FieldRef<"Libro", 'Int'>
    readonly destacado: FieldRef<"Libro", 'Boolean'>
    readonly createdAt: FieldRef<"Libro", 'DateTime'>
    readonly seccionId: FieldRef<"Libro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Libro findUnique
   */
  export type LibroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findUniqueOrThrow
   */
  export type LibroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findFirst
   */
  export type LibroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findFirstOrThrow
   */
  export type LibroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findMany
   */
  export type LibroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libros to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro create
   */
  export type LibroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The data needed to create a Libro.
     */
    data: XOR<LibroCreateInput, LibroUncheckedCreateInput>
  }

  /**
   * Libro createMany
   */
  export type LibroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro createManyAndReturn
   */
  export type LibroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Libro update
   */
  export type LibroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The data needed to update a Libro.
     */
    data: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
    /**
     * Choose, which Libro to update.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro updateMany
   */
  export type LibroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro updateManyAndReturn
   */
  export type LibroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Libro upsert
   */
  export type LibroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The filter to search for the Libro to update in case it exists.
     */
    where: LibroWhereUniqueInput
    /**
     * In case the Libro found by the `where` argument doesn't exist, create a new Libro with this data.
     */
    create: XOR<LibroCreateInput, LibroUncheckedCreateInput>
    /**
     * In case the Libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
  }

  /**
   * Libro delete
   */
  export type LibroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter which Libro to delete.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro deleteMany
   */
  export type LibroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libros to delete
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to delete.
     */
    limit?: number
  }

  /**
   * Libro.seccion
   */
  export type Libro$seccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    where?: SeccionWhereInput
  }

  /**
   * Libro without action
   */
  export type LibroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
  }


  /**
   * Model Autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    bio: string | null
    foto: string | null
    createdAt: Date | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    bio: string | null
    foto: string | null
    createdAt: Date | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nombre: number
    bio: number
    foto: number
    createdAt: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nombre?: true
    bio?: true
    foto?: true
    createdAt?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nombre?: true
    bio?: true
    foto?: true
    createdAt?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nombre?: true
    bio?: true
    foto?: true
    createdAt?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nombre: string
    bio: string | null
    foto: string | null
    createdAt: Date
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    bio?: boolean
    foto?: boolean
    createdAt?: boolean
    libro?: boolean | Autor$libroArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    bio?: boolean
    foto?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    bio?: boolean
    foto?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectScalar = {
    id?: boolean
    nombre?: boolean
    bio?: boolean
    foto?: boolean
    createdAt?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "bio" | "foto" | "createdAt", ExtArgs["result"]["autor"]>
  export type AutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | Autor$libroArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {
      libro: Prisma.$LibroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      bio: string | null
      foto: string | null
      createdAt: Date
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends Autor$libroArgs<ExtArgs> = {}>(args?: Subset<T, Autor$libroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nombre: FieldRef<"Autor", 'String'>
    readonly bio: FieldRef<"Autor", 'String'>
    readonly foto: FieldRef<"Autor", 'String'>
    readonly createdAt: FieldRef<"Autor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor createManyAndReturn
   */
  export type AutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor updateManyAndReturn
   */
  export type AutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor.libro
   */
  export type Autor$libroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    cursor?: LibroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
  }


  /**
   * Model Seccion
   */

  export type AggregateSeccion = {
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  export type SeccionAvgAggregateOutputType = {
    id: number | null
  }

  export type SeccionSumAggregateOutputType = {
    id: number | null
  }

  export type SeccionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    createdAt: Date | null
  }

  export type SeccionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    createdAt: Date | null
  }

  export type SeccionCountAggregateOutputType = {
    id: number
    nombre: number
    createdAt: number
    _all: number
  }


  export type SeccionAvgAggregateInputType = {
    id?: true
  }

  export type SeccionSumAggregateInputType = {
    id?: true
  }

  export type SeccionMinAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
  }

  export type SeccionMaxAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
  }

  export type SeccionCountAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    _all?: true
  }

  export type SeccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccion to aggregate.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seccions
    **/
    _count?: true | SeccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeccionMaxAggregateInputType
  }

  export type GetSeccionAggregateType<T extends SeccionAggregateArgs> = {
        [P in keyof T & keyof AggregateSeccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeccion[P]>
      : GetScalarType<T[P], AggregateSeccion[P]>
  }




  export type SeccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionWhereInput
    orderBy?: SeccionOrderByWithAggregationInput | SeccionOrderByWithAggregationInput[]
    by: SeccionScalarFieldEnum[] | SeccionScalarFieldEnum
    having?: SeccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeccionCountAggregateInputType | true
    _avg?: SeccionAvgAggregateInputType
    _sum?: SeccionSumAggregateInputType
    _min?: SeccionMinAggregateInputType
    _max?: SeccionMaxAggregateInputType
  }

  export type SeccionGroupByOutputType = {
    id: number
    nombre: string
    createdAt: Date
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  type GetSeccionGroupByPayload<T extends SeccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeccionGroupByOutputType[P]>
            : GetScalarType<T[P], SeccionGroupByOutputType[P]>
        }
      >
    >


  export type SeccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    libro?: boolean | Seccion$libroArgs<ExtArgs>
    _count?: boolean | SeccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectScalar = {
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }

  export type SeccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "createdAt", ExtArgs["result"]["seccion"]>
  export type SeccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | Seccion$libroArgs<ExtArgs>
    _count?: boolean | SeccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seccion"
    objects: {
      libro: Prisma.$LibroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      createdAt: Date
    }, ExtArgs["result"]["seccion"]>
    composites: {}
  }

  type SeccionGetPayload<S extends boolean | null | undefined | SeccionDefaultArgs> = $Result.GetResult<Prisma.$SeccionPayload, S>

  type SeccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeccionCountAggregateInputType | true
    }

  export interface SeccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seccion'], meta: { name: 'Seccion' } }
    /**
     * Find zero or one Seccion that matches the filter.
     * @param {SeccionFindUniqueArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeccionFindUniqueArgs>(args: SelectSubset<T, SeccionFindUniqueArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeccionFindUniqueOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeccionFindUniqueOrThrowArgs>(args: SelectSubset<T, SeccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeccionFindFirstArgs>(args?: SelectSubset<T, SeccionFindFirstArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeccionFindFirstOrThrowArgs>(args?: SelectSubset<T, SeccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seccions
     * const seccions = await prisma.seccion.findMany()
     * 
     * // Get first 10 Seccions
     * const seccions = await prisma.seccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seccionWithIdOnly = await prisma.seccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeccionFindManyArgs>(args?: SelectSubset<T, SeccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seccion.
     * @param {SeccionCreateArgs} args - Arguments to create a Seccion.
     * @example
     * // Create one Seccion
     * const Seccion = await prisma.seccion.create({
     *   data: {
     *     // ... data to create a Seccion
     *   }
     * })
     * 
     */
    create<T extends SeccionCreateArgs>(args: SelectSubset<T, SeccionCreateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seccions.
     * @param {SeccionCreateManyArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeccionCreateManyArgs>(args?: SelectSubset<T, SeccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seccions and returns the data saved in the database.
     * @param {SeccionCreateManyAndReturnArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeccionCreateManyAndReturnArgs>(args?: SelectSubset<T, SeccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seccion.
     * @param {SeccionDeleteArgs} args - Arguments to delete one Seccion.
     * @example
     * // Delete one Seccion
     * const Seccion = await prisma.seccion.delete({
     *   where: {
     *     // ... filter to delete one Seccion
     *   }
     * })
     * 
     */
    delete<T extends SeccionDeleteArgs>(args: SelectSubset<T, SeccionDeleteArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seccion.
     * @param {SeccionUpdateArgs} args - Arguments to update one Seccion.
     * @example
     * // Update one Seccion
     * const seccion = await prisma.seccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeccionUpdateArgs>(args: SelectSubset<T, SeccionUpdateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seccions.
     * @param {SeccionDeleteManyArgs} args - Arguments to filter Seccions to delete.
     * @example
     * // Delete a few Seccions
     * const { count } = await prisma.seccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeccionDeleteManyArgs>(args?: SelectSubset<T, SeccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeccionUpdateManyArgs>(args: SelectSubset<T, SeccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions and returns the data updated in the database.
     * @param {SeccionUpdateManyAndReturnArgs} args - Arguments to update many Seccions.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeccionUpdateManyAndReturnArgs>(args: SelectSubset<T, SeccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seccion.
     * @param {SeccionUpsertArgs} args - Arguments to update or create a Seccion.
     * @example
     * // Update or create a Seccion
     * const seccion = await prisma.seccion.upsert({
     *   create: {
     *     // ... data to create a Seccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seccion we want to update
     *   }
     * })
     */
    upsert<T extends SeccionUpsertArgs>(args: SelectSubset<T, SeccionUpsertArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionCountArgs} args - Arguments to filter Seccions to count.
     * @example
     * // Count the number of Seccions
     * const count = await prisma.seccion.count({
     *   where: {
     *     // ... the filter for the Seccions we want to count
     *   }
     * })
    **/
    count<T extends SeccionCountArgs>(
      args?: Subset<T, SeccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeccionAggregateArgs>(args: Subset<T, SeccionAggregateArgs>): Prisma.PrismaPromise<GetSeccionAggregateType<T>>

    /**
     * Group by Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeccionGroupByArgs['orderBy'] }
        : { orderBy?: SeccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seccion model
   */
  readonly fields: SeccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends Seccion$libroArgs<ExtArgs> = {}>(args?: Subset<T, Seccion$libroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seccion model
   */
  interface SeccionFieldRefs {
    readonly id: FieldRef<"Seccion", 'Int'>
    readonly nombre: FieldRef<"Seccion", 'String'>
    readonly createdAt: FieldRef<"Seccion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seccion findUnique
   */
  export type SeccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findUniqueOrThrow
   */
  export type SeccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findFirst
   */
  export type SeccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findFirstOrThrow
   */
  export type SeccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findMany
   */
  export type SeccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccions to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion create
   */
  export type SeccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Seccion.
     */
    data: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
  }

  /**
   * Seccion createMany
   */
  export type SeccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seccion createManyAndReturn
   */
  export type SeccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seccion update
   */
  export type SeccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Seccion.
     */
    data: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
    /**
     * Choose, which Seccion to update.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion updateMany
   */
  export type SeccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion updateManyAndReturn
   */
  export type SeccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion upsert
   */
  export type SeccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Seccion to update in case it exists.
     */
    where: SeccionWhereUniqueInput
    /**
     * In case the Seccion found by the `where` argument doesn't exist, create a new Seccion with this data.
     */
    create: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
    /**
     * In case the Seccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
  }

  /**
   * Seccion delete
   */
  export type SeccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter which Seccion to delete.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion deleteMany
   */
  export type SeccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccions to delete
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to delete.
     */
    limit?: number
  }

  /**
   * Seccion.libro
   */
  export type Seccion$libroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    cursor?: LibroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Seccion without action
   */
  export type SeccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nombre: 'nombre',
    password: 'password',
    createdAt: 'createdAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LibroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    genero: 'genero',
    descripcion: 'descripcion',
    imagen: 'imagen',
    userId: 'userId',
    autorId: 'autorId',
    destacado: 'destacado',
    createdAt: 'createdAt',
    seccionId: 'seccionId'
  };

  export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    bio: 'bio',
    foto: 'foto',
    createdAt: 'createdAt'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const SeccionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    createdAt: 'createdAt'
  };

  export type SeccionScalarFieldEnum = (typeof SeccionScalarFieldEnum)[keyof typeof SeccionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    libro?: LibroListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    libro?: LibroOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nombre?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    libro?: LibroListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type LibroWhereInput = {
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    id?: IntFilter<"Libro"> | number
    titulo?: StringFilter<"Libro"> | string
    genero?: StringFilter<"Libro"> | string
    descripcion?: StringNullableFilter<"Libro"> | string | null
    imagen?: StringNullableFilter<"Libro"> | string | null
    userId?: IntFilter<"Libro"> | number
    autorId?: IntFilter<"Libro"> | number
    destacado?: BoolFilter<"Libro"> | boolean
    createdAt?: DateTimeFilter<"Libro"> | Date | string
    seccionId?: IntNullableFilter<"Libro"> | number | null
    seccion?: XOR<SeccionNullableScalarRelationFilter, SeccionWhereInput> | null
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LibroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    destacado?: SortOrder
    createdAt?: SortOrder
    seccionId?: SortOrderInput | SortOrder
    seccion?: SeccionOrderByWithRelationInput
    autor?: AutorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LibroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    titulo?: StringFilter<"Libro"> | string
    genero?: StringFilter<"Libro"> | string
    descripcion?: StringNullableFilter<"Libro"> | string | null
    imagen?: StringNullableFilter<"Libro"> | string | null
    userId?: IntFilter<"Libro"> | number
    autorId?: IntFilter<"Libro"> | number
    destacado?: BoolFilter<"Libro"> | boolean
    createdAt?: DateTimeFilter<"Libro"> | Date | string
    seccionId?: IntNullableFilter<"Libro"> | number | null
    seccion?: XOR<SeccionNullableScalarRelationFilter, SeccionWhereInput> | null
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LibroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    destacado?: SortOrder
    createdAt?: SortOrder
    seccionId?: SortOrderInput | SortOrder
    _count?: LibroCountOrderByAggregateInput
    _avg?: LibroAvgOrderByAggregateInput
    _max?: LibroMaxOrderByAggregateInput
    _min?: LibroMinOrderByAggregateInput
    _sum?: LibroSumOrderByAggregateInput
  }

  export type LibroScalarWhereWithAggregatesInput = {
    AND?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    OR?: LibroScalarWhereWithAggregatesInput[]
    NOT?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Libro"> | number
    titulo?: StringWithAggregatesFilter<"Libro"> | string
    genero?: StringWithAggregatesFilter<"Libro"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Libro"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"Libro"> | string | null
    userId?: IntWithAggregatesFilter<"Libro"> | number
    autorId?: IntWithAggregatesFilter<"Libro"> | number
    destacado?: BoolWithAggregatesFilter<"Libro"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Libro"> | Date | string
    seccionId?: IntNullableWithAggregatesFilter<"Libro"> | number | null
  }

  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nombre?: StringFilter<"Autor"> | string
    bio?: StringNullableFilter<"Autor"> | string | null
    foto?: StringNullableFilter<"Autor"> | string | null
    createdAt?: DateTimeFilter<"Autor"> | Date | string
    libro?: LibroListRelationFilter
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    bio?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    libro?: LibroOrderByRelationAggregateInput
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nombre?: StringFilter<"Autor"> | string
    bio?: StringNullableFilter<"Autor"> | string | null
    foto?: StringNullableFilter<"Autor"> | string | null
    createdAt?: DateTimeFilter<"Autor"> | Date | string
    libro?: LibroListRelationFilter
  }, "id">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    bio?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nombre?: StringWithAggregatesFilter<"Autor"> | string
    bio?: StringNullableWithAggregatesFilter<"Autor"> | string | null
    foto?: StringNullableWithAggregatesFilter<"Autor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Autor"> | Date | string
  }

  export type SeccionWhereInput = {
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    id?: IntFilter<"Seccion"> | number
    nombre?: StringFilter<"Seccion"> | string
    createdAt?: DateTimeFilter<"Seccion"> | Date | string
    libro?: LibroListRelationFilter
  }

  export type SeccionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    libro?: LibroOrderByRelationAggregateInput
  }

  export type SeccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    createdAt?: DateTimeFilter<"Seccion"> | Date | string
    libro?: LibroListRelationFilter
  }, "id" | "nombre">

  export type SeccionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    _count?: SeccionCountOrderByAggregateInput
    _avg?: SeccionAvgOrderByAggregateInput
    _max?: SeccionMaxOrderByAggregateInput
    _min?: SeccionMinOrderByAggregateInput
    _sum?: SeccionSumOrderByAggregateInput
  }

  export type SeccionScalarWhereWithAggregatesInput = {
    AND?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    OR?: SeccionScalarWhereWithAggregatesInput[]
    NOT?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seccion"> | number
    nombre?: StringWithAggregatesFilter<"Seccion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Seccion"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    nombre: string
    password: string
    createdAt?: Date | string
    role?: $Enums.Role
    libro?: LibroCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    nombre: string
    password: string
    createdAt?: Date | string
    role?: $Enums.Role
    libro?: LibroUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    libro?: LibroUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    libro?: LibroUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    nombre: string
    password: string
    createdAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type LibroCreateInput = {
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    destacado?: boolean
    createdAt?: Date | string
    seccion?: SeccionCreateNestedOneWithoutLibroInput
    autor: AutorCreateNestedOneWithoutLibroInput
    user: UserCreateNestedOneWithoutLibroInput
  }

  export type LibroUncheckedCreateInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    userId: number
    autorId: number
    destacado?: boolean
    createdAt?: Date | string
    seccionId?: number | null
  }

  export type LibroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccion?: SeccionUpdateOneWithoutLibroNestedInput
    autor?: AutorUpdateOneRequiredWithoutLibroNestedInput
    user?: UserUpdateOneRequiredWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LibroCreateManyInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    userId: number
    autorId: number
    destacado?: boolean
    createdAt?: Date | string
    seccionId?: number | null
  }

  export type LibroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AutorCreateInput = {
    nombre: string
    bio?: string | null
    foto?: string | null
    createdAt?: Date | string
    libro?: LibroCreateNestedManyWithoutAutorInput
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nombre: string
    bio?: string | null
    foto?: string | null
    createdAt?: Date | string
    libro?: LibroUncheckedCreateNestedManyWithoutAutorInput
  }

  export type AutorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libro?: LibroUpdateManyWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libro?: LibroUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type AutorCreateManyInput = {
    id?: number
    nombre: string
    bio?: string | null
    foto?: string | null
    createdAt?: Date | string
  }

  export type AutorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeccionCreateInput = {
    nombre: string
    createdAt?: Date | string
    libro?: LibroCreateNestedManyWithoutSeccionInput
  }

  export type SeccionUncheckedCreateInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    libro?: LibroUncheckedCreateNestedManyWithoutSeccionInput
  }

  export type SeccionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libro?: LibroUpdateManyWithoutSeccionNestedInput
  }

  export type SeccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libro?: LibroUncheckedUpdateManyWithoutSeccionNestedInput
  }

  export type SeccionCreateManyInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
  }

  export type SeccionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type LibroListRelationFilter = {
    every?: LibroWhereInput
    some?: LibroWhereInput
    none?: LibroWhereInput
  }

  export type LibroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SeccionNullableScalarRelationFilter = {
    is?: SeccionWhereInput | null
    isNot?: SeccionWhereInput | null
  }

  export type AutorScalarRelationFilter = {
    is?: AutorWhereInput
    isNot?: AutorWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LibroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    destacado?: SortOrder
    createdAt?: SortOrder
    seccionId?: SortOrder
  }

  export type LibroAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    seccionId?: SortOrder
  }

  export type LibroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    destacado?: SortOrder
    createdAt?: SortOrder
    seccionId?: SortOrder
  }

  export type LibroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    destacado?: SortOrder
    createdAt?: SortOrder
    seccionId?: SortOrder
  }

  export type LibroSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    autorId?: SortOrder
    seccionId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    bio?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    bio?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    bio?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeccionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type SeccionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeccionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type SeccionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type SeccionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LibroCreateNestedManyWithoutUserInput = {
    create?: XOR<LibroCreateWithoutUserInput, LibroUncheckedCreateWithoutUserInput> | LibroCreateWithoutUserInput[] | LibroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutUserInput | LibroCreateOrConnectWithoutUserInput[]
    createMany?: LibroCreateManyUserInputEnvelope
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
  }

  export type LibroUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LibroCreateWithoutUserInput, LibroUncheckedCreateWithoutUserInput> | LibroCreateWithoutUserInput[] | LibroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutUserInput | LibroCreateOrConnectWithoutUserInput[]
    createMany?: LibroCreateManyUserInputEnvelope
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type LibroUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibroCreateWithoutUserInput, LibroUncheckedCreateWithoutUserInput> | LibroCreateWithoutUserInput[] | LibroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutUserInput | LibroCreateOrConnectWithoutUserInput[]
    upsert?: LibroUpsertWithWhereUniqueWithoutUserInput | LibroUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibroCreateManyUserInputEnvelope
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    update?: LibroUpdateWithWhereUniqueWithoutUserInput | LibroUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibroUpdateManyWithWhereWithoutUserInput | LibroUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibroUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibroCreateWithoutUserInput, LibroUncheckedCreateWithoutUserInput> | LibroCreateWithoutUserInput[] | LibroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutUserInput | LibroCreateOrConnectWithoutUserInput[]
    upsert?: LibroUpsertWithWhereUniqueWithoutUserInput | LibroUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibroCreateManyUserInputEnvelope
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    update?: LibroUpdateWithWhereUniqueWithoutUserInput | LibroUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibroUpdateManyWithWhereWithoutUserInput | LibroUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[]
  }

  export type SeccionCreateNestedOneWithoutLibroInput = {
    create?: XOR<SeccionCreateWithoutLibroInput, SeccionUncheckedCreateWithoutLibroInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutLibroInput
    connect?: SeccionWhereUniqueInput
  }

  export type AutorCreateNestedOneWithoutLibroInput = {
    create?: XOR<AutorCreateWithoutLibroInput, AutorUncheckedCreateWithoutLibroInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLibroInput
    connect?: AutorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLibroInput = {
    create?: XOR<UserCreateWithoutLibroInput, UserUncheckedCreateWithoutLibroInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibroInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SeccionUpdateOneWithoutLibroNestedInput = {
    create?: XOR<SeccionCreateWithoutLibroInput, SeccionUncheckedCreateWithoutLibroInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutLibroInput
    upsert?: SeccionUpsertWithoutLibroInput
    disconnect?: SeccionWhereInput | boolean
    delete?: SeccionWhereInput | boolean
    connect?: SeccionWhereUniqueInput
    update?: XOR<XOR<SeccionUpdateToOneWithWhereWithoutLibroInput, SeccionUpdateWithoutLibroInput>, SeccionUncheckedUpdateWithoutLibroInput>
  }

  export type AutorUpdateOneRequiredWithoutLibroNestedInput = {
    create?: XOR<AutorCreateWithoutLibroInput, AutorUncheckedCreateWithoutLibroInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLibroInput
    upsert?: AutorUpsertWithoutLibroInput
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutLibroInput, AutorUpdateWithoutLibroInput>, AutorUncheckedUpdateWithoutLibroInput>
  }

  export type UserUpdateOneRequiredWithoutLibroNestedInput = {
    create?: XOR<UserCreateWithoutLibroInput, UserUncheckedCreateWithoutLibroInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibroInput
    upsert?: UserUpsertWithoutLibroInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLibroInput, UserUpdateWithoutLibroInput>, UserUncheckedUpdateWithoutLibroInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibroCreateNestedManyWithoutAutorInput = {
    create?: XOR<LibroCreateWithoutAutorInput, LibroUncheckedCreateWithoutAutorInput> | LibroCreateWithoutAutorInput[] | LibroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutAutorInput | LibroCreateOrConnectWithoutAutorInput[]
    createMany?: LibroCreateManyAutorInputEnvelope
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
  }

  export type LibroUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<LibroCreateWithoutAutorInput, LibroUncheckedCreateWithoutAutorInput> | LibroCreateWithoutAutorInput[] | LibroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutAutorInput | LibroCreateOrConnectWithoutAutorInput[]
    createMany?: LibroCreateManyAutorInputEnvelope
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
  }

  export type LibroUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LibroCreateWithoutAutorInput, LibroUncheckedCreateWithoutAutorInput> | LibroCreateWithoutAutorInput[] | LibroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutAutorInput | LibroCreateOrConnectWithoutAutorInput[]
    upsert?: LibroUpsertWithWhereUniqueWithoutAutorInput | LibroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LibroCreateManyAutorInputEnvelope
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    update?: LibroUpdateWithWhereUniqueWithoutAutorInput | LibroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LibroUpdateManyWithWhereWithoutAutorInput | LibroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[]
  }

  export type LibroUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LibroCreateWithoutAutorInput, LibroUncheckedCreateWithoutAutorInput> | LibroCreateWithoutAutorInput[] | LibroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutAutorInput | LibroCreateOrConnectWithoutAutorInput[]
    upsert?: LibroUpsertWithWhereUniqueWithoutAutorInput | LibroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LibroCreateManyAutorInputEnvelope
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    update?: LibroUpdateWithWhereUniqueWithoutAutorInput | LibroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LibroUpdateManyWithWhereWithoutAutorInput | LibroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[]
  }

  export type LibroCreateNestedManyWithoutSeccionInput = {
    create?: XOR<LibroCreateWithoutSeccionInput, LibroUncheckedCreateWithoutSeccionInput> | LibroCreateWithoutSeccionInput[] | LibroUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutSeccionInput | LibroCreateOrConnectWithoutSeccionInput[]
    createMany?: LibroCreateManySeccionInputEnvelope
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
  }

  export type LibroUncheckedCreateNestedManyWithoutSeccionInput = {
    create?: XOR<LibroCreateWithoutSeccionInput, LibroUncheckedCreateWithoutSeccionInput> | LibroCreateWithoutSeccionInput[] | LibroUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutSeccionInput | LibroCreateOrConnectWithoutSeccionInput[]
    createMany?: LibroCreateManySeccionInputEnvelope
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
  }

  export type LibroUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<LibroCreateWithoutSeccionInput, LibroUncheckedCreateWithoutSeccionInput> | LibroCreateWithoutSeccionInput[] | LibroUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutSeccionInput | LibroCreateOrConnectWithoutSeccionInput[]
    upsert?: LibroUpsertWithWhereUniqueWithoutSeccionInput | LibroUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: LibroCreateManySeccionInputEnvelope
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    update?: LibroUpdateWithWhereUniqueWithoutSeccionInput | LibroUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: LibroUpdateManyWithWhereWithoutSeccionInput | LibroUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[]
  }

  export type LibroUncheckedUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<LibroCreateWithoutSeccionInput, LibroUncheckedCreateWithoutSeccionInput> | LibroCreateWithoutSeccionInput[] | LibroUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: LibroCreateOrConnectWithoutSeccionInput | LibroCreateOrConnectWithoutSeccionInput[]
    upsert?: LibroUpsertWithWhereUniqueWithoutSeccionInput | LibroUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: LibroCreateManySeccionInputEnvelope
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[]
    update?: LibroUpdateWithWhereUniqueWithoutSeccionInput | LibroUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: LibroUpdateManyWithWhereWithoutSeccionInput | LibroUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LibroCreateWithoutUserInput = {
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    destacado?: boolean
    createdAt?: Date | string
    seccion?: SeccionCreateNestedOneWithoutLibroInput
    autor: AutorCreateNestedOneWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutUserInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    autorId: number
    destacado?: boolean
    createdAt?: Date | string
    seccionId?: number | null
  }

  export type LibroCreateOrConnectWithoutUserInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutUserInput, LibroUncheckedCreateWithoutUserInput>
  }

  export type LibroCreateManyUserInputEnvelope = {
    data: LibroCreateManyUserInput | LibroCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LibroUpsertWithWhereUniqueWithoutUserInput = {
    where: LibroWhereUniqueInput
    update: XOR<LibroUpdateWithoutUserInput, LibroUncheckedUpdateWithoutUserInput>
    create: XOR<LibroCreateWithoutUserInput, LibroUncheckedCreateWithoutUserInput>
  }

  export type LibroUpdateWithWhereUniqueWithoutUserInput = {
    where: LibroWhereUniqueInput
    data: XOR<LibroUpdateWithoutUserInput, LibroUncheckedUpdateWithoutUserInput>
  }

  export type LibroUpdateManyWithWhereWithoutUserInput = {
    where: LibroScalarWhereInput
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyWithoutUserInput>
  }

  export type LibroScalarWhereInput = {
    AND?: LibroScalarWhereInput | LibroScalarWhereInput[]
    OR?: LibroScalarWhereInput[]
    NOT?: LibroScalarWhereInput | LibroScalarWhereInput[]
    id?: IntFilter<"Libro"> | number
    titulo?: StringFilter<"Libro"> | string
    genero?: StringFilter<"Libro"> | string
    descripcion?: StringNullableFilter<"Libro"> | string | null
    imagen?: StringNullableFilter<"Libro"> | string | null
    userId?: IntFilter<"Libro"> | number
    autorId?: IntFilter<"Libro"> | number
    destacado?: BoolFilter<"Libro"> | boolean
    createdAt?: DateTimeFilter<"Libro"> | Date | string
    seccionId?: IntNullableFilter<"Libro"> | number | null
  }

  export type SeccionCreateWithoutLibroInput = {
    nombre: string
    createdAt?: Date | string
  }

  export type SeccionUncheckedCreateWithoutLibroInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
  }

  export type SeccionCreateOrConnectWithoutLibroInput = {
    where: SeccionWhereUniqueInput
    create: XOR<SeccionCreateWithoutLibroInput, SeccionUncheckedCreateWithoutLibroInput>
  }

  export type AutorCreateWithoutLibroInput = {
    nombre: string
    bio?: string | null
    foto?: string | null
    createdAt?: Date | string
  }

  export type AutorUncheckedCreateWithoutLibroInput = {
    id?: number
    nombre: string
    bio?: string | null
    foto?: string | null
    createdAt?: Date | string
  }

  export type AutorCreateOrConnectWithoutLibroInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutLibroInput, AutorUncheckedCreateWithoutLibroInput>
  }

  export type UserCreateWithoutLibroInput = {
    email: string
    nombre: string
    password: string
    createdAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutLibroInput = {
    id?: number
    email: string
    nombre: string
    password: string
    createdAt?: Date | string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutLibroInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLibroInput, UserUncheckedCreateWithoutLibroInput>
  }

  export type SeccionUpsertWithoutLibroInput = {
    update: XOR<SeccionUpdateWithoutLibroInput, SeccionUncheckedUpdateWithoutLibroInput>
    create: XOR<SeccionCreateWithoutLibroInput, SeccionUncheckedCreateWithoutLibroInput>
    where?: SeccionWhereInput
  }

  export type SeccionUpdateToOneWithWhereWithoutLibroInput = {
    where?: SeccionWhereInput
    data: XOR<SeccionUpdateWithoutLibroInput, SeccionUncheckedUpdateWithoutLibroInput>
  }

  export type SeccionUpdateWithoutLibroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeccionUncheckedUpdateWithoutLibroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorUpsertWithoutLibroInput = {
    update: XOR<AutorUpdateWithoutLibroInput, AutorUncheckedUpdateWithoutLibroInput>
    create: XOR<AutorCreateWithoutLibroInput, AutorUncheckedCreateWithoutLibroInput>
    where?: AutorWhereInput
  }

  export type AutorUpdateToOneWithWhereWithoutLibroInput = {
    where?: AutorWhereInput
    data: XOR<AutorUpdateWithoutLibroInput, AutorUncheckedUpdateWithoutLibroInput>
  }

  export type AutorUpdateWithoutLibroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorUncheckedUpdateWithoutLibroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLibroInput = {
    update: XOR<UserUpdateWithoutLibroInput, UserUncheckedUpdateWithoutLibroInput>
    create: XOR<UserCreateWithoutLibroInput, UserUncheckedCreateWithoutLibroInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLibroInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLibroInput, UserUncheckedUpdateWithoutLibroInput>
  }

  export type UserUpdateWithoutLibroInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutLibroInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type LibroCreateWithoutAutorInput = {
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    destacado?: boolean
    createdAt?: Date | string
    seccion?: SeccionCreateNestedOneWithoutLibroInput
    user: UserCreateNestedOneWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutAutorInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    userId: number
    destacado?: boolean
    createdAt?: Date | string
    seccionId?: number | null
  }

  export type LibroCreateOrConnectWithoutAutorInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutAutorInput, LibroUncheckedCreateWithoutAutorInput>
  }

  export type LibroCreateManyAutorInputEnvelope = {
    data: LibroCreateManyAutorInput | LibroCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type LibroUpsertWithWhereUniqueWithoutAutorInput = {
    where: LibroWhereUniqueInput
    update: XOR<LibroUpdateWithoutAutorInput, LibroUncheckedUpdateWithoutAutorInput>
    create: XOR<LibroCreateWithoutAutorInput, LibroUncheckedCreateWithoutAutorInput>
  }

  export type LibroUpdateWithWhereUniqueWithoutAutorInput = {
    where: LibroWhereUniqueInput
    data: XOR<LibroUpdateWithoutAutorInput, LibroUncheckedUpdateWithoutAutorInput>
  }

  export type LibroUpdateManyWithWhereWithoutAutorInput = {
    where: LibroScalarWhereInput
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyWithoutAutorInput>
  }

  export type LibroCreateWithoutSeccionInput = {
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    destacado?: boolean
    createdAt?: Date | string
    autor: AutorCreateNestedOneWithoutLibroInput
    user: UserCreateNestedOneWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutSeccionInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    userId: number
    autorId: number
    destacado?: boolean
    createdAt?: Date | string
  }

  export type LibroCreateOrConnectWithoutSeccionInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutSeccionInput, LibroUncheckedCreateWithoutSeccionInput>
  }

  export type LibroCreateManySeccionInputEnvelope = {
    data: LibroCreateManySeccionInput | LibroCreateManySeccionInput[]
    skipDuplicates?: boolean
  }

  export type LibroUpsertWithWhereUniqueWithoutSeccionInput = {
    where: LibroWhereUniqueInput
    update: XOR<LibroUpdateWithoutSeccionInput, LibroUncheckedUpdateWithoutSeccionInput>
    create: XOR<LibroCreateWithoutSeccionInput, LibroUncheckedCreateWithoutSeccionInput>
  }

  export type LibroUpdateWithWhereUniqueWithoutSeccionInput = {
    where: LibroWhereUniqueInput
    data: XOR<LibroUpdateWithoutSeccionInput, LibroUncheckedUpdateWithoutSeccionInput>
  }

  export type LibroUpdateManyWithWhereWithoutSeccionInput = {
    where: LibroScalarWhereInput
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyWithoutSeccionInput>
  }

  export type LibroCreateManyUserInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    autorId: number
    destacado?: boolean
    createdAt?: Date | string
    seccionId?: number | null
  }

  export type LibroUpdateWithoutUserInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccion?: SeccionUpdateOneWithoutLibroNestedInput
    autor?: AutorUpdateOneRequiredWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LibroUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LibroCreateManyAutorInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    userId: number
    destacado?: boolean
    createdAt?: Date | string
    seccionId?: number | null
  }

  export type LibroUpdateWithoutAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccion?: SeccionUpdateOneWithoutLibroNestedInput
    user?: UserUpdateOneRequiredWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LibroUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LibroCreateManySeccionInput = {
    id?: number
    titulo: string
    genero: string
    descripcion?: string | null
    imagen?: string | null
    userId: number
    autorId: number
    destacado?: boolean
    createdAt?: Date | string
  }

  export type LibroUpdateWithoutSeccionInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: AutorUpdateOneRequiredWithoutLibroNestedInput
    user?: UserUpdateOneRequiredWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutSeccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibroUncheckedUpdateManyWithoutSeccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}