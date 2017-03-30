<?php
namespace Ggoop\Gmf\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Ggoop\Gmf\Models\Visitor;

class VisitorMiddleware {

	public function handle($request, Closure $next) {
		$headers = $request->headers;
		$server = $request->server;
		$inData = [];
		$inData['ip'] = $request->ip();
		$inData['path'] = $request->path();
		$inData['url'] = $request->url();
		$inData['method'] = $request->method();
		$inData['params'] = json_encode($request->input());
		if ($headers) {
			$inData['agent'] = $headers->get('user-agent');
		}
		if ($server) {
			$inData['referer'] = $server->get('HTTP_REFERER');
		}
		$inData['created_at'] = Carbon::now();
		$fromTime = microtime(true);

		$response = $next($request);

		$endTime = microtime(true);
		$inData['times'] = $endTime - $server->get('REQUEST_TIME_FLOAT');
		$inData['actimes'] = $endTime - $fromTime;
		Visitor::create($inData);
		return $response;
	}
}
