import 'package:go_router/go_router.dart';
import 'package:tictokclone/features/authentication/sign_up_screen.dart';
import 'package:tictokclone/features/authentication/widgets/email_screen.dart';
import 'package:tictokclone/features/authentication/widgets/username_screen.dart';
import 'package:tictokclone/features/users/user_profile_screen.dart';

final router = GoRouter(
  routes: [
    GoRoute(
      name: SignUpScreen.routeName,
      path: SignUpScreen.routeURL,
      builder: (context, state) => const SignUpScreen(),
      routes: [
        GoRoute(
            path: UsernameScreen.routeURL,
            name: UsernameScreen.routeName,
            builder: (context, state) => const UsernameScreen(),
            routes: [
              GoRoute(
                name: EmailScreen.routeName,
                path: EmailScreen.routeURL,
                builder: (context, state) {
                  final args = state.extra as EmailScreenArgs;
                  return EmailScreen(username: args.username);
                },
              ),
            ]),
      ],
    ),
    // GoRoute(
    //   path: LogInScreen.routeName,
    //   builder: (context, state) => const LogInScreen(),
    // ),
    GoRoute(
      path: "/users/:username",
      builder: (context, state) {
        final username = state.params['username'];
        final tab = state.queryParams["show"];
        return UserProfileScreen(
          username: username!,
          tab: tab!,
        );
      },
    ),
  ],
);
